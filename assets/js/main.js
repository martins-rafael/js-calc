function createCalc() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.btnClick();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.result();
                }
            })
        },

        btnClick() {
            document.addEventListener('click', e => {
                const element = e.target;

                if (element.classList.contains('btn-num')) {
                    this.btnToDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.delete();
                }

                if (element.classList.contains('btn-eq')) {
                    this.result();
                }
                
                this.display.focus();
            });
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        delete() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        result() {
            let calculate = this.display.value;

            try {
                calculate = eval(calculate);

                if (!calculate) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = calculate;
            } catch (e) {
                alert('Conta inválida!');
                return;
            }
        }
    };
}

const calc = createCalc();
calc.start();