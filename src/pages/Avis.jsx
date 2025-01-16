import React, { useEffect, useState } from 'react';

function Avis() {
    const [avis, setAvis] = useState([]);

    const search = async () => {
        try {
            const response = await fetch("http://localhost:3000/avis");
            const data = await response.json();
            setAvis(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div data-testid="avis-root" className="flex h-screen justify-center">
            <div className="grid grid-cols-3 gap-3">
                {avis.map((unAvis) => (
                    <article key={unAvis.id} className="bg-slate-50 text-gray-700 p-4 rounded-md">
                        <div className="text-xl">
                            {unAvis.avis}
                        </div>
                        <h4 className="mt-2">
                            {unAvis.email}
                        </h4>
                    </article>
                ))}
            </div>
            <pre>{JSON.stringify(avis, null, 2)}</pre>
        </div>
    );
}

export default Avis;
