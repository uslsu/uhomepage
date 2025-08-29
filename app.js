;(() => {
  const root = document.body
  const nameEl = document.getElementById("display-name")
  const imgEl = document.getElementById("avatar-img")

  const defaultName = root?.dataset?.name || "uocou"
  const defaultAvatar = root?.dataset?.avatar || "https://picsum.photos/200"

  function setProfile(name, avatarUrl) {
    if (nameEl && typeof name === "string" && name.trim()) {
      const trimmedName = name.trim()
      nameEl.textContent = trimmedName
      if (imgEl) {
        imgEl.alt = `${trimmedName} 的头像`
      }
    }

    if (imgEl && typeof avatarUrl === "string" && avatarUrl.trim()) {
      const trimmedUrl = avatarUrl.trim()
      const img = new Image()
      img.onload = () => {
        imgEl.src = trimmedUrl
      }
      img.onerror = () => {
        console.warn("头像加载失败，使用默认头像")
        imgEl.src = defaultAvatar
      }
      img.src = trimmedUrl
    }
  }
  setProfile(defaultName, defaultAvatar)
})()
