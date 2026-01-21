import { Head } from '@inertiajs/react';
// import './App.css'


interface ContentItem {
    title: string;
    type: string;
    text: string;
}

const content: readonly ContentItem[] = [
    { title: 'Earl Grey', type: 'Black tea', text: 'Fully oxidized, robust flavor' },
    { title: 'English breakfast', type: 'Black tea', text: 'Fully oxidized, robust flavor' },
    { title: 'Darjeeling', type: 'Black tea', text: 'Fully oxidized, robust flavor' },
    { title: 'Matcha', type: 'Green tea', text: 'Unoxidized, steamed or pan-fired, fresh flavor' },
    { title: 'Sencha', type: 'Green tea', text: 'Unoxidized, steamed or pan-fired, fresh flavor' },
    { title: 'Jasmine', type: 'Green tea', text: 'Unoxidized, steamed or pan-fired, fresh flavor' },
    { title: 'Silver needle', type: 'White tea', text: 'Minimally processed, delicate flavor' },
    { title: 'White Peony', type: 'White tea', text: 'Minimally processed, delicate flavor' },
    { title: 'Da Hong Pao', type: 'Oolong', text: 'Partially oxidized, complex, bridging green and black tea' },
    { title: 'Tieguanyin', type: 'Oolong', text: 'Partially oxidized, complex, bridging green and black tea' },
    { title: 'Shou Pu-erh', type: 'Pu-erh tea', text: 'Fermented and aged, earthy' },
    { title: 'Jun Shan Yin Zhen', type: 'Yellow tea', text: 'Rare, gently oxidized, subtle sweetness' },
] as const;

interface NumericArray {
    vector: number[];
}


const myData: NumericArray = {
    vector: [1, -1, -2, -7, -9, -8, 2, -3, 3, 4, 5, -4, 6, 7, 8, 9,]
};

export default function Silya() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>



            <ul>
                {content.map((item) => (
                    <li>
                        <h1 className="dark:text-white text-black text-xl font-semibold">{item.title}</h1>
                        <h2 className="dark:text-white text-black text-xl font-semibold">{item.type}</h2>
                        <p className="dark:text-white text-black text-xl font-semibold">{item.text}</p>
                    </li>
                ))}
            </ul>

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
