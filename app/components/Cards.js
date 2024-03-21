export function Cards (props){
    let {name} = props;
    return `
    <article class='cards'>
    <h4>${name}</h4>
    <img src='https://picsum.photos/id/237/200/300'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
    </article>
    `
}