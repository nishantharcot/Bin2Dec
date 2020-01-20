(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const input = document.getElementById(
          'binaryInput') as HTMLInputElement;
      const answer = document.getElementById('decimalOutput') as HTMLInputElement;
      const convertButton = document.getElementById(
          'convert') as HTMLButtonElement;
      const model = {
        // Not required for this project
      };
      const view = {
        init: () => {
          convertButton.addEventListener('click', () => {
            const len = input.value.length;
            for (let i = 0; i < len; i++) {
              if (!(input.value[i] === '0' || input.value[i] === '1')) {
                input.classList.remove('is-success');
                input.classList.add('is-danger');
                convertButton.classList.remove('is-success');
                convertButton.classList.add('is-danger');
                answer.value = `Not a valid Binary Number!`;
                break;
              }
            }
            let check = 0;
            for (let i = 0; i < len; i++) {
              if (!(input.value[i] === '0' || input.value[i] === '1')) {
                check = 1;
                break;
              }
            }
            if (check === 0) {
              input.classList.remove('is-danger');
              input.classList.add('is-success');
              convertButton.classList.remove('is-danger');
              convertButton.classList.add('is-success');
              const decimalNumber = controller.bin2dec(input.value);
              answer.value = `${decimalNumber}`;
            }
          });
        },
      };
      const controller = {
        init: () => {
          view.init();
        },
        bin2dec: (num: String) => {
          const len = num.length;
          let decNum = 0;
          for (let i = len - 1; i >= 0; i--) {
            decNum += Number(num[len-1-i]) * 2**(i);
          }
          return decNum;
        },
      };
      controller.init();
    }
  }
)();
