import MethodsLayout from "../layouts/MethodsLayout";


export default () => (
    <MethodsLayout>
        <div>
            <h2>Equipe</h2>
            <ul className='list'>
                <li className='top-gap'>
                    <div>
                        <span className='name'>Vinicius Misael</span>
                        <br />
                        <span className='curso'>Graduando em Ciencia da Computação</span>
                    </div>
                </li>
                <li className='top-gap'>
                    <ld>
                        <span className='name'>Karina Villarim</span>
                        <br />
                        <span className='curso'>Graduanda em Engenharia da Computação</span>
                    </ld>
                </li>
                <li className='top-gap'>
                    <div>
                        <span className='name'>Dayane Felix</span>
                        <br />
                        <span className='curso'>Graduanda em Ciencia da Computação</span>
                    </div>
                </li>
                <li className='top-gap'>
                    <div>
                        <span className='name'>Lucas Lucena</span>
                        <br />
                        <span className='curso'>Graduando em Engenharia da Computação</span>
                    </div>
                </li>

                <li className='top-gap'>
                    <div>
                        <span className='name'>Lucas N Nóbrega</span>
                        <br />
                        <span className='curso'>Graduando em Engenharia da Computação</span>
                    </div>
                </li>
                <li className='top-gap'>
                    <div>
                        <span className='name'>Gabriel Belarmino</span>
                        <br />
                        <span className='curso'>Graduando em Ciencia da Computação</span>
                    </div>
                </li>
                <li className='top-gap'>
                    <div>
                        <span className='name'>Almir Cassemiro</span>
                        <br />
                        <span className='curso'>Graduando em Engenharia da Computação</span>
                    </div>
                </li>
            </ul>
            <style jsx>{`
            .list{
                list-style: none;
            }
            .name{
                font-weight: bold,
                padding-left: 0px,
            }
            .curso{
                font-weight: light;
                padding-left: 1em;
                color: gray
            }
        `}</style>
        </div>
    </MethodsLayout>

)