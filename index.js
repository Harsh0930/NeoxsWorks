const content_one_card = document.getElementById("service-card-one");
const content_two_card = document.getElementById("service-card-two");
const content_three_card = document.getElementById("service-card-three");
const content_four_card = document.getElementById("service-card-four");

const content_one = document.getElementById("content-one");
const content_two = document.getElementById("content-two");
const content_three = document.getElementById('content-three');
const content_four = document.getElementById('content-four');

content_one_card.addEventListener('mouseenter',()=>displayChanger("block","none","none","none"));
content_one_card.addEventListener('mouseleave',()=>displayChanger("block","none","none","none"));
content_two_card.addEventListener('mouseenter',()=>displayChanger("none","block","none","none"));
content_two_card.addEventListener('mouseleave',()=>displayChanger("none","block","none","none"));
content_three_card.addEventListener('mouseenter',()=>displayChanger("none","none","block","none"));
content_three_card.addEventListener('mouseleave',()=>displayChanger("none","none","block","none"));
content_four_card.addEventListener('mouseenter',()=>displayChanger("none","none","none","block"));
content_four_card.addEventListener('mouseleave',()=>displayChanger("block","none","none","none"));

function displayChanger(val1,val2,val3,val4){
    content_one.style.display = val1;
    content_two.style.display = val2;
    content_three.style.display = val3;
    content_four.style.display = val4;
}

// const container_card_one = document.querySelector('.about-custom-card-one');

// container_card_one.addEventListener('mousemove', (e) => {
//   const rect = container_card_one.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   container_card_one.style.setProperty('--x', `${x}px`);
//   container_card_one.style.setProperty('--y', `${y}px`);
// });
// const container_card_two = document.querySelector('.about-custom-card-two');

// container_card_two.addEventListener('mousemove', (e) => {
//   const rect = container_card_two.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   container_card_two.style.setProperty('--x', `${x}px`);
//   container_card_two.style.setProperty('--y', `${y}px`);
// });
// const container_card_three = document.querySelector('.about-custom-card-three');

// container_card_three.addEventListener('mousemove', (e) => {
//   const rect = container_card_three.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   container_card_three.style.setProperty('--x', `${x}px`);
//   container_card_three.style.setProperty('--y', `${y}px`);
// });

const about_section = document.querySelector('.about-section');

about_section.addEventListener('mousemove', (e) => {
  const rect = about_section.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  about_section.style.setProperty('--x', `${x}px`);
  about_section.style.setProperty('--y', `${y}px`);
});