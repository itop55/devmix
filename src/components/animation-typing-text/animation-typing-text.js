class AnimationText {
    constructor(id, duration, list) {
        this.id = document.getElementById(id);
        this.list = list;
        this.duration = duration;
        if(this.id ) {
            this.draw(0)
            this.drawMouse()
        }
    }

    drawMouse() {
        let self = this;
        setInterval(() => {
            if (this.id.classList.contains('active'))
                this.id.classList.remove('active')
            else
                this.id.classList.add('active')
        }, self.duration * 2)
    }

    draw(id) {
        let self = this;
        return new Promise((resolve => {
            if (id >= this.list.length)
                this.draw(0).then(() => {
                    resolve(true)
                })
            else
                this.drawAsc(this.list[id], 0).then(() => {
                    setTimeout(() => {
                        this.drawDesc(this.list[id]).then(() => {
                            setTimeout(() => {
                                this.draw(id += 1).then(() => {
                                    resolve(true)
                                })
                            }, self.duration * 2)
                        })
                    }, self.duration * 2)
                })
        }))
    }

    drawDesc(text) {
        return new Promise((resolve, reject) => {
            let newText = text.slice(0, text.length - 1)
            this.drawText(newText).then(() => {
                if (text.length === 0)
                    resolve(true)
                else
                    this.drawDesc(newText).then(() => {
                        resolve(true)
                    })
            })
        });
    }

    drawAsc(text, id) {
        return new Promise((resolve, reject) => {
            let newText = text.slice(0, id)
            this.drawText(newText, true).then(() => {
                if (id === text.length)
                    resolve(true)
                else
                    this.drawAsc(text, id += 1).then(() => {
                        resolve(true)
                    })
            })
        });
    }

    drawText(newText, isAsc = false) {
        let self = this;
        return new Promise((resolve) => {
            setTimeout(() => {
                this.id.innerText = newText
                resolve(true)
            }, isAsc ? self.duration : 10);
        });
    }
}

// Выполнить после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    new AnimationText("animation-text", 150, [
        "section, div, aside",
        "text-transform, transition",
        "link, script, ul, ol",
        "footer, header, main, nav",
        "background-color, font-family",
        "cursor, h1, h2, font-wheight",
        "meta, head, bold, uppercase",
        "svg, line-height, underline",
        "font-size, flex, height",
        "media, box-shadow, article"
    ]);
}, false);
