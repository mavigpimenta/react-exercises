import { useState } from "react"

export const Wind = () => {

    const [isTextVisible, setIsTextVisible] = useState(false);

    return (
        <>

            <nav className="bg-gray-300 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-gray-800 text-lg font-bold">Mavi</a>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 hover:text-gray-600">Link 1</a>
                            <a href="#" className="text-gray-800 hover:text-gray-600">Link 2</a>
                            <a href="#" className="text-gray-800 hover:text-gray-600">Link 3</a>
                        </div>
                </div>
            </nav>
            <div className="flex flex-row gap-4 justify-between p-4 items-center w-full h-screen">
                <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded z-50" onClick={() => setIsTextVisible(!isTextVisible)}>Butão</button>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36zw6VGtb42jzmD3SIzVYwL427XczPfJ2e8Uk-p-rsWxBj8wTu0_lgW7bDxZisobxqyg&usqp=CAU" alt=""></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Creme Takumã</div>
                        <p className="text-gray-700 text-base">bLA VLA BLA bvla bla bla bla bla bla AJHHJJJJJJJJJ</p>
                    </div>
                </div>

                <table className="w-1/3 bg-white">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Coluna 1</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Coluna 2</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Coluna 3</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="bg-gray-200">
                        <td className="w-1/3 text-left py-3 px-4">Dado 1</td>
                        <td className="w-1/3 text-left py-3 px-4">Dado 2</td>
                        <td className="text-left py-3 px-4">Dado 3</td>
                      </tr>
                      <tr>
                        <td className="w-1/3 text-left py-3 px-4">Dado 4</td>
                        <td className="w-1/3 text-left py-3 px-4">Dado 5</td>
                        <td className="text-left py-3 px-4">Dado 6</td>
                      </tr>
                    </tbody>
                </table>
                
                {isTextVisible &&
                    <>
                        <div className="flex items-center justify-center absolute w-full">
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex flex-col" role="alert">
                                <strong className="font-bold">Sucesso!</strong>
                                <span className="block">Você clicou no botão.</span>
                            </div>
                        </div>
                    </>
                }
            </div>

            <footer className="bg-gray-300 text-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <span>© 2024 Mavizokas. Todos os direitos reservados.</span>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-600">Facebook</a>
                        <a href="#" className="hover:text-gray-600">Twitter</a>
                        <a href="#" className="hover:text-gray-600">Instagram</a>
                    </div>
                </div>
            </footer>
        </>
    )
}