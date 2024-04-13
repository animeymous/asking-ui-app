import { useState } from 'react'
import './asking.css'

function Asking (){

    let [count, setCount] = useState(1)
    const [originalTop, setOriginalTop] = useState('')
    const [originalLeft, setOriginalLeft] = useState('')

    const img1 = "./images/manja.gif"
    const img2 = "./images/mochi.gif";
    const img3 = "./images/couple-forgive-me.gif";
    const img4 = "./images/peach-goma-phone.gif";
    const img5 = "./images/mochi-cat.gif";

    const buttonClassName = count === 4 ? 'move-random' : '';
    function loadYes (){
        setCount(count = 5)
        const moveRandom = document.getElementById("move-random");
        if (moveRandom) {
            moveRandom.style.position = "absolute"; // Ensure the button has absolute positioning
            moveRandom.style.top = originalTop;
            moveRandom.style.left = originalLeft;

            moveRandom.removeEventListener("mouseover", ()=> {console.log("mouseover listener removed")});
        } else {
            console.error("Element with ID 'move-random' not found.");
        }
    }

    return (
        <>
            <div>
                {
                    count === 1 && (
                        <div>
                            <img src={img1} alt="error_img1" />
                            <h1>Do you love me? 🤗</h1>
                            <p>~Apun to tera hi hai</p>
                        </div>
                    )
                }
                {
                    count === 2 && (
                        <div>
                            <img src={img2} alt="error_img1" />
                            <h1>Soch le ache se! 🙄</h1>
                            <p>itte jldi nahi mat bol🙄</p>
                        </div>
                    )
                }
                {
                    count === 3 && (
                        <div>
                            <img src={img3} alt="error_img3" />
                            <h1>Ek aur baar Soch le! 😣</h1>
                            <p>kyu aisa kr rahi hai 😣</p>
                        </div>
                    )
                }
                {
                    count === 4 && (
                        <div>
                            <img src={img4} alt="error_img4" />
                            <h1>Manja na! Kitna bhav khaegi 😭</h1>
                            <p>bahot galat baat hai 😭</p>
                        </div>
                    )
                }
                {
                    count === 5 && (
                        <div>
                            <img src={img5} alt="error_img5" />
                            <h1>Hehehehe, I knew it! 😘</h1>
                        </div>
                    )
                }
            </div>
            <div>

                <button onClick={()=> {
                    loadYes();
                }}>Yes</button>
                <button itemID={buttonClassName} id="move-random" onClick={() => {
                    if (count <= 3) {
                        setCount(count + 1);
                        if(count === 3){
                            const moveRandom = document.getElementById("move-random");
                            if (moveRandom) {

                                const originalTop = moveRandom.style.top;
                                const originalLeft = moveRandom.style.left

                                setOriginalTop(originalTop);
                                setOriginalLeft(originalLeft)

                                moveRandom.addEventListener("mouseover", () => {
                                    moveRandom.style.position = "absolute"; // Ensure the button has absolute positioning
                                    moveRandom.style.top = Math.floor(Math.random() * 90 + 5) + "%";
                                    moveRandom.style.left = Math.floor(Math.random() * 90 + 5) + "%";
                                })
                            } else {
                                console.error("Element with ID 'move-random' not found.");
                            }
                        }
                    }
                }}>No</button>
            </div>
        </>
    )

}

export default Asking;
