// Scroll element into view by css selector.

export function scrollIntoView(q) {
    const el = document.querySelector(q)
    if (el) {
        setTimeout(() => {
            el.scrollIntoView()
        }, 300)
    }
}
