const base_url = 'http://localhost:3000/auth/signup';

const registerForm = document.querySelector('.sign-up-form');
if (registerForm) {

    registerForm.addEventListener('submit', e => {

        e.preventDefault();
        let data = new FormData(registerForm);
        let jdata = {};
        data.forEach((value, key) => {
            jdata[key] = value;

        })
        console.log(jdata);
        fetch(base_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jdata),
            mode: "cors",
            cache: "no-cache",
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("token", data.token)
                console.log(data);
                window.location.assign("./pages/signin.html");
            })
            .catch(error => {
                console.log(error);
            })
    });
}

