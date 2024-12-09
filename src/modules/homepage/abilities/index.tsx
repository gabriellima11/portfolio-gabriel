import { abilitiesIcons } from "./abilities";

export const Abilities: React.FC = () => {
    return (
        <section id="abilities" className="w-full">
            <hr className="mb-20" />
            <div className="h-screen md:h-auto flex flex-col items-center">
                <h2 className="text-4xl font-medium mb-32">Habilidades</h2>
                <div className="flex gap-14 flex-wrap justify-center w-2/3 md:grid md:grid-cols-2">
                    {
                        abilitiesIcons.map((ability, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl">{ability.name}</p>
                                <div className="flex justify-center">
                                    {ability.image}
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};