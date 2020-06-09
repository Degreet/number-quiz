let maxNum, progressWidth = 0
if (localStorage.progressWidth && Number(localStorage.progressWidth) > 0) progressWidth = Number(localStorage.progressWidth)

firstCard.innerText = Math.round(Math.random() * 9)
secondCard.innerText = Math.round(Math.random() * 9)
if (!localStorage.level) localStorage.level = 1
if (!localStorage.reged) welcomeModalHref.click()

setInterval(() => {
    maxNum = Math.max(Number(firstCard.innerText), Number(secondCard.innerText))
    progress.style.width = progressWidth + '%'
    if (firstCard.innerText == secondCard.innerText) firstCard.innerText = Math.round(Math.random() * 9)
    level.innerText = localStorage.level
    localStorage.progressWidth = progressWidth
}, 100)

document.querySelectorAll('span.card').forEach(btn => {
    btn.addEventListener('click', () => {
        if (progressWidth == 100) {
            setTimeout(() => {
                document.querySelector('.alert').classList.add("active")
                if (document.querySelector('.alert').classList.contains("disable"))
                    document.querySelector('.alert').classList.remove("disable")
                localStorage.level++
                progressWidth = 0
                setTimeout(() => {
                    document.querySelector('.alert').classList.remove("active")
                }, 1500)
            }, 1000)
        }

        if (btn.innerText == maxNum) {
            btn.classList.add("green")
            glass.className = 'active'
            for (let i = 0; i < 10; i++) progressWidth++
            setTimeout(() => {
                btn.classList.remove('green')
                glass.className = ''
            }, 1500);
        } else {
            btn.classList.add("red")
            glass.className = 'active'
            if (progressWidth >= 10) for (let i = 0; i < 10; i++) progressWidth--
            setTimeout(() => {
                btn.classList.remove('red')
                glass.className = ''
            }, 1500)
        }

        setTimeout(() => {
            firstCard.innerText = Math.round(Math.random() * 9)
            secondCard.innerText = Math.round(Math.random() * 9)
        }, 1500)
    })
})

closeWelcomeModalBtn.onclick = () => localStorage.reged = true

function resetData() {
    confirmReset = confirm("Вы действительно хотите удалить все ваши данные? Восстановить их будет не возможно!")
    if (confirmReset) {
        progressWidth = 0
        localStorage.clear()
        location.reload()
    }
}