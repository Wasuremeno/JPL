import { Head } from '@inertiajs/react';
// import './App.css'



interface NumericArray {
    vector: number[];
}


const myData: NumericArray = {
    vector: [1, -1, -2, -7, -9, -8, 2, -3, 3, 4, 5, -4, 6, 7, 8, 9,]
};

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>



 
            <h1>Positive numbers</h1>
            <ul>
                {myData.vector.filter(num => num > 0).map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <h1>Negative numbers</h1>
            <ul>
                {myData.vector.filter(num => num < 0).map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>

        </>
    );
}
