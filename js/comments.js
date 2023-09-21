//control the alert function
function myAlert(isSuccess, msg) {
	const myAlert = document.querySelector(".alert");
	myAlert.classList.add(isSuccess ? "alert-success" : "alert-danger");
	myAlert.innerHTML = msg;
	myAlert.classList.add("show");

	setTimeout(() => {
		myAlert.classList.remove(isSuccess ? "alert-success" : "alert-danger");
		myAlert.innerHTML = "";
		myAlert.classList.remove("show");
	}, 2000);
}

const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const usernameReg = /^[a-zA-Z0-9_]{3,20}$/;
//add validate function on the input element
document.querySelector("#username").addEventListener("input", function () {
	const hint = document.querySelector("#usernameHelp");
	hint.classList.remove("red", "green");
	const check = usernameReg.test(this.value);
	if (check) {
		hint.innerHTML = "valid username";
		hint.classList.add("green");
	} else {
		hint.innerHTML = "invalid username";
		hint.classList.add("red");
	}
});

document
	.querySelector("#exampleInputEmail1")
	.addEventListener("input", function () {
		const hint = document.querySelector("#emailHelp");
		hint.classList.remove("red", "green");
		const check = emailReg.test(this.value);
		if (check) {
			hint.innerHTML = "valid email";
			hint.classList.add("green");
		} else {
			hint.innerHTML = "invalid email";
			hint.classList.add("red");
		}
	});

//post button function, including rendering the page
document.querySelector(".btn").addEventListener("click", (e) => {
	e.preventDefault();
	if (
		document.querySelector("#emailHelp").classList.contains("green") &&
		document.querySelector("#usernameHelp").classList.contains("green")
	) {
		const username = document.querySelector("#username").value;
		const content = document.querySelector(
			"#exampleFormControlTextarea1"
		).value;
		let ratting = document.querySelector(".form-select").value;

		// ratting = ratting === null ? "EXCELLENT" : ratting;
		const showRatting = function () {
			if (ratting === "EXCELLENT") {
				return "label-success";
			} else if (ratting === "GOOD") {
				return "label-info";
			} else {
				return "label-danger";
			}
		};
		console.log(showRatting());
		const newComment = document.createElement("div");
		const data = new Date();
		const dataString = data.toLocaleDateString();
		newComment.classList.add("d-flex", "flex-row", "comment-row");
		newComment.innerHTML = `<div class="d-flex flex-row comment-row">
        <div class="p-2"><span class="round"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width="50"></span></div>
        <div class="comment-text w-100">
            <h5>${username}</h5>
            <div class="comment-footer">
                <span class="date">${dataString}</span>
                <span class="label ${showRatting()}">${ratting}</span> <span class="action-icons">
                        <a href="#" data-abc="true"><i class="fa fa-pencil"></i></a>
                        <a href="#" data-abc="true"><i class="fa fa-rotate-right"></i></a>
                        <a href="#" data-abc="true"><i class="fa fa-heart"></i></a>
                    </span>
            </div>
            <p class="m-b-5 m-t-10">${content}</p>
        </div>
    </div>`;
		console.log(newComment);
		myAlert(true, "Comment posts");
		const parentElement = document.querySelector(".comment-widgets");
		parentElement.insertBefore(newComment, parentElement.firstChild);
	} else {
		myAlert(false, "Something went wrong");
	}
});
