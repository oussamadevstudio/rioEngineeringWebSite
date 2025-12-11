const showSidebar = () => {
    const sideBar = document.querySelector("aside")
    const sideBarIcon = document.querySelector("nav")

    sideBar.style.display = "flex"
    sideBarIcon.style.visibility = "hidden"

}

const hideSideBar = () => {
    const sideBar = document.querySelector("aside")
    const sideBarIcon = document.querySelector("nav")

    sideBar.style.display = "none"
    sideBarIcon.style.visibility = "visible"
}