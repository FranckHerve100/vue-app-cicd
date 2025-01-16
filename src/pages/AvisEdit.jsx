import { useState } from 'react';
import { useForm } from 'react-hook-form';
import React from 'react';



function AvisEdit() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const [submission, setSubmission] = useState('IDLE')

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "http://localhost:3000/avis",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            );
            await response.json();
            setSubmission('SUCCESS');
            reset();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container flex flex-col h-screen justify-center">
            <h2 className="px-56 text-3xl mb-4">Merci de nous transmettre votre avis</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="text-xl px-56 flex flex-col gap-y-5">
                <div className="form-group flex flex-col">
                    <label htmlFor="avis">Votre avis</label>
                    <textarea {...register("avis", { required: true })} id="avis" rows="4" className="p-4 text-black rounded-md"></textarea>
                    {errors.avis && <span className="text-red-700">Ce champ est obligatoire</span>}
                </div>
                <div className="form-group flex flex-col">
                    <label htmlFor="email">
                        Votre email
                    </label>
                    <input type="email" {...register("email", { required: true })} id="email" className="p-2 rounded-md text-black">
                    </input>
                    {errors.email && <span className="text-red-700">Ce champ est obligatoire</span>}
                </div>
                <div className="form-group flex flex-col">
                    <button type="submit" className="p-2 rounded-md bg-green-900">Enregistrer</button>
                </div>
                {submission === 'SUCCESS' && <p className="texte-center p-2 rounded-md bg-green-900"></p> }
            </form>
        </div>
    )
}

export default AvisEdit;
