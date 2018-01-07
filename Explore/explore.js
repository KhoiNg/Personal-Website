function focus() {
    input = document.getElementById("input");
    input.focus();
}

function check(event){
    var code = event.which || event.keyCode;
    input = document.getElementById("input");
    output =document.getElementById("output");

    // case if press enter
    if (code == 13){

        // save previous command
        output.innerHTML += input.value + "<br>";

        // check
        switch (input.value) {
            case "khoi":
                output.innerHTML +=
                    "<p class=\"tab_in\"> Full name: Khoi Phan Tan Nguyen <br>" +
                    "Occupation: Proctor, Tutor - Math, Computer Science <br>" +
                    "Education: Junior - M.S. Computer Science / Math minor - Dakota State University, Madison, South Dakota <br>" +
                    "Interest: software development, machine learning, mathematics, algorithms, traveling, reading, watching strange movies <br>" +
                    "Quote: \"The only source of knowledge is experience\" - Albert Einstein </p>" ;
                break;

            case "help":
                output.innerHTML +=
                    "<table id=\"table_help\"> " +
                        "<tr> <td> cat [filename] </td> <td> view contents of a file. </td> </tr>" +
                        "<tr> <td> clear </td> <td> clear the screen. </td> </tr>" +
                        "<tr> <td> help </td> <td> show help dialog. </td></tr>" +
                        "<tr> <td> home </td> <td> go to home page. </td> </tr>" +
                        "<tr> <td> khoi </td> <td> short information about me. </td> </tr>" +
                        "<tr> <td> ls </td> <td> show available file. </td> </tr>" +
                    "</table>";
                break;

            case "ls":
                output.innerHTML +=
                    "<ul id=\"list_ls\">" +
                        "<li> education.txt </li>" +
                        "<li> skills.txt </li>" +
                        "<li> work.txt</li>" +
                        "<li> projects.txt</li>" +
                        "<li> contact.txt </li>" +
                    "</ul>" ;
                break;

            //    cat cmd

            case "cat education.txt":
                output.innerHTML +=
                    "<span class=\"tab_in\"> Dakota State University, Madison, SD, USA (Fall 2016 - Present) </span> <br>" +
                        "<span class=\"tab_in_extra\"> Junior - M.S Computer Science / Math minor </span> <br>" +
                        "<span class=\"tab_in_extra\"> GPA: 3.95 - Major GPA: 4.0 - President’s Academic Honors (Fall 2016 – Present). </span> <br>" +
                    "<span class=\"tab_in\"> Nguyen Thuong Hien High School, Ho Chi Minh city (Sai Gon), Viet Nam (2013 - 2016) </span> <br>" +
                        "<span class=\"tab_in_extra\"> GPA: 8.6/10 – Top 5 students in class. </span> <br>" ;
                break;

            case "cat skills.txt":
                output.innerHTML +=
                    "<span class=\"tab_in\"> Programming Languages </span> <br>" +
                        "<span class=\"tab_in_extra\"> Proficient: C, C++, C#</span> <br>" +
                        "<span class=\"tab_in_extra\"> Familiar: Java, SQL, HTML / CSS / Javascript, Python </span> <br>" +
                    "<span class=\"tab_in\"> Software Development </span> <br>" +
                        "<span class=\"tab_in_extra\"> Proficient: Windows Forms, Android Development </span> <br>" +
                        "<span class=\"tab_in_extra\"> Familiar: Web Development </span> <br>" +
                    "<span class=\"tab_in\"> Technical Knowledge </span> <br>" +
                        "<span class=\"tab_in_extra\"> Proficient: Mathetmatics, Objects Oriented Design </span> <br>" +
                        "<span class=\"tab_in_extra\"> Familiar: Database Management </span> <br>" +
                    "<span class=\"tab_in\"> Others </span> <br>" +
                        "<span class=\"tab_in_extra\"> Assembly Language, Reverse Engineer, Linux, Windows </span> <br>" +
                        "<span class=\"tab_in_extra\"> Microsoft Office Tools, LaTeX, Cryptocurrency </span> <br>" +
                        "<span class=\"tab_in_extra\"> Languages: English (fluent), Vietnamese (native) </span> <br>";
                break;

            case "cat work.txt":
                output.innerHTML +=
                    "<span class=\"tab_in\"> Tutor (Computer Science/Math) @ Dakota State University </span> <br>" +
                        "<span class=\"tab_in_extra\"> Aug. 2017 - Present </span> <br>" +
                    "<span class=\"tab_in\"> Proctor @ Dakota State University </span> <br>" +
                        "<span class=\"tab_in_extra\"> May. 2017 - Present </span> <br>" +
                    "<span class=\"tab_in\"> Technical Support @ Dakota State University </span> <br>" +
                        "<span class=\"tab_in_extra\"> Summer 2017 </span> <br>" +
                    "<span class=\"tab_in\"> Operator @ Sodexo </span> <br>" +
                        "<span class=\"tab_in_extra\"> Jan. 2017 - Aug. 2017 </span> <br>";
                break;

            case "cat projects.txt":
                output.innerHTML +=
                    "<a class=\"tab_in\" href=\"https://github.com/KhoiNg/Customized-Command-Line-for-Website\" target=\"_blank\"> " +
                    "Customized Command Line for Website</a> <br>" +
                        "<span class=\"tab_in_extra\"> A customized Command Line for yourself </span> <br>" +

                    "<a class=\"tab_in\" href=\"https://github.com/KhoiNg/8-bit-Paint\" target=\"_blank\"> " +
                    "8-bit Paint</a> <br>" +
                        "<span class=\"tab_in_extra\"> An 8-bit application to simulate the famous Paint program</span> <br>" +

                    "<a class=\"tab_in\" href=\"https://github.com/KhoiNg/Bank-Manager-Android-App\" target=\"_blank\"> " +
                    "Bank Manager - Android</a> <br>" +
                        "<span class=\"tab_in_extra\"> An application to simulate real world bank account control</span> <br>" +

                    "<a class=\"tab_in\" href=\"https://github.com/KhoiNg/Bank-Manager-Winforms\" target=\"_blank\"> " +
                    "Bank Manager - WinForms</a> <br>" +
                        "<span class=\"tab_in_extra\"> An application to simulate real world bank account control</span> <br>" +

                    "<a class=\"tab_in\" href=\"https://github.com/KhoiNg/ChessGame\" target=\"_blank\"> " +
                    "Chess Game </a> <br>" +
                        "<span class=\"tab_in_extra\"> An application to imitate a standard two-player Chess Game</span> <br>" +

                    "<a class=\"tab_in\" href=\"../index.html\" target=\"_blank\"> " +
                    "Personal Website</a> <br>";
                break;

            case "cat contact.txt":
                output.innerHTML +=
                    "<span class=\"tab_in\"> Phone: 605-480-4394 </span> <br>" +
                    "<span class=\"tab_in\"> Email: nguyenphantankhoi@gmail.com / Khoi.Nguyen@trojans.dsu.edu  </span> <br>" +
                    "<span class=\"tab_in\"> Social Media: " +
                        "<a href=\"https://github.com/KhoiNg\"> GitHub</a>, " +
                        "<a href=\"https://www.linkedin.com/in/khoipnguyen/\"> LinkedIn</a>, " +
                        "<a href=\"https://www.facebook.com/khoinguyen.phantan\"> Facebook</a>" +
                    "</span> <br>";
                break;

            //
            case "clear":
                output.innerHTML = "";
                break;

            case "home":
                window.location.assign("../index.html");
                break;

            case "":
                break;

            default:
                output.innerHTML += " -bash: s: command not found. Try 'help'. <br>";
                break;
        }

        // reset
        output.innerHTML += " guess@explore: ";
        input.value = "";
        input.focus();
    }

    // case if spam
    else if (input.value.length >= 50){
        output.innerHTML += input.value + "<br> -bash: s: stop spamming. <br> guess@explore: ";
        input.value = "";
        input.focus();
    }

}
