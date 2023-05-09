import { useState } from "react"

export enum UserRole {
    CEO = "ceo",
    ANY = "any"
}
export type UserProfileProps = {
    firstName: string;
    role?: UserRole
}

type ProductProps = {
    name: string;
    price: number;
}

export const UserProfile = ({ firstName, role }: UserProfileProps) => {
    const [isFired, setIsFired] = useState(false);

    /*     const [names, setNames] = useState<string[] | null>([]);
        setNames(["abc"]); */
    return (
        <>
            <div>Hi {firstName}, you are not doing well</div>
            <button onClick={() => setIsFired(!isFired)}>
                {isFired ? "Oops, hire them back!" : "Fire this loser"}

            </button>
        </>
    )



}

export const ImageConcat = ({ name, price }: ProductProps) => {
    const [images, setImages] = useState<string[]>([])

    const addImage = () => {
        setImages(images.concat(`image-${images.length + 1}.png`));
        //console.log("hi");
    };

    const removeImage = () => {
        document.getElementById(`image-${images.length}.png`)
        images.pop();
        setImages(images);
    }

    return (

        <div>
            <div>
                {name} {price}
            </div>
            <button onClick={addImage}>Add Image</button>
            <button onClick={removeImage}>Remove Image</button>
            <ul>
            {images.map((src) => (
                <li>
                <img src={src} key={src} />
                </li>

            ))}
            </ul>
       
            {images.map((img) => (
                <p key={img}>{img}</p>
            ))}
        </div>

    )

}

//Keys help React identify which items have changed, are added, or are removed.
//Keys should be given to the elements inside the array to give the elements a stable identity: