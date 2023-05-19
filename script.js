const downloadBtn = document.querySelector('.downloadBtn');
const progressBtn = document.querySelector('.progressBtn');
const downloadText = document.querySelector('.downloadText');

const simulateDownload = async(progressVal) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(progressVal + 1);
        }, 50);
    });
}

downloadBtn.addEventListener('click', () => {
    progressBtn.classList.add('active');

    const percent = document.querySelector('.percentage');

    (async() => {
        let count = 0;
        while(count < 100){
            count = await simulateDownload(count);
            console.log(count);

            // Update the width of loading container only at the interval of multiple of 5
            if(count % 5 === 0){
                document.documentElement.style.setProperty('--progress-val', `${count}%`);
            }

            // set the percentage indicator
            percent.innerHTML = `${count}%`;
        }

        downloadText.innerText = 'Done';
        downloadBtn.setAttribute("disabled", "disabled");
        setTimeout(() => progressBtn.classList.replace('active', 'inactive'), 1000);
    })();
});

