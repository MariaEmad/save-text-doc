const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");
    //==============================================================//
if (textarea.value = "") {
    saveBtn.classList.add("none")
} else {
    saveBtn.classList.remove("none")

}

selectMenu.addEventListener("click", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text
    saveBtn.innerHTML = `Save As ${selectedOption.split(" ")[0]} File`
})



saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], { type: selectMenu.value })
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = fileNameInput.value
    link.href = fileUrl
    link.click()
    

})


//https://www.youtube.com/watch?v=fAgLnRVHp_I&list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3&index=9
//https://www.codingnepalweb.com/save-text-as-file-html-javascript/