console.log('test...');
document.addEventListener('DOMContentLoaded',()=>{

    let myButton = document.querySelector('#totalButton');
    myButton.addEventListener('click',()=>{
        console.log('in the click event')
        let sum = 0;
        let allPrice = document.querySelectorAll('.priceTag');
        allPrice.forEach((item) => {
            sum += Number(item.innerText);
        })
        console.log(sum);
        let totalDiv = document.querySelector('#totalDiv');
        let totalData = document.createElement('p');
        totalData.innerText = `${sum}::: total Price`;
        totalDiv.appendChild(totalData);
    });

});
