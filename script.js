function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


console.log(scrollToSection)

// document.getElementById('linkSection1').addEventListener('click', function () {
//     scrollToSection('#section1');
// });
// document.getElementById('linkSection2').addEventListener('click', function () {
//     scrollToSection('#section2');
// });
// document.getElementById('linkSection3').addEventListener('click', function () {
//     scrollToSection('#section3');

// document.getElementById('linkSection3').addEventListener('click', function () {
//         scrollToSection('#section4');
//     });
// });