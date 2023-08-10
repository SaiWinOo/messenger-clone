import React from 'react';

const Chat = () => {

    const users = ['sai', 'win', 'oo', 'ei', 'phyo', 'aung', 'kyaw', 'zaw', 'mya', 'ksfa', 'fsdaf'];

    const messages = [
        {
            id: 1,
            sender: 1,
            message: 'hello world',
            receiver: 2,
        },
        {
            id: 2,
            sender: 1,
            message: 'hello world',
            receiver: 2,
        },
        {
            id: 3,
            sender: 1,
            message: 'hello world',
            receiver: 2,
        },
        {
            id: 4,
            sender: 1,
            message: 'hello world',
            receiver: 2,
        },
        {
            id: 5,
            sender: 2,
            message: 'hello world',
            receiver: 1,
        },

    ];

    const OtherMessage = (m, index) => {
        let isLastMessageForSender = messages[index + 1].sender !== m.sender;
        console.log(isLastMessageForSender);
        return (
            <div className={'flex items-center gap-3'}>
                {
                    isLastMessageForSender &&
                    <img className={'w-[35px] h-[35px] rounded-full object-cover'}
                         src="https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg?w=996&t=st=1691661512~exp=1691662112~hmac=35a073d932ac08d6fe71dd65c760181e753637d66c98b475fc27d7503e1c0709"
                         alt=""/>
                }
                <p className={'bg-gray-200 py-1 px-2 rounded-full ' + (isLastMessageForSender ? '' : 'ml-[45px]')}>Hello world</p>
            </div>
        )
    }
    const MyMessage = (m) => {
        return (
            <div className={'flex items-center justify-end gap-3'}>
                <p className={'bg-gray-200 py-1 px-2 rounded-full'}>{m.message}</p>
                <img className={'w-[35px] h-[35px] rounded-full object-cover'}
                     src="https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg?w=996&t=st=1691661512~exp=1691662112~hmac=35a073d932ac08d6fe71dd65c760181e753637d66c98b475fc27d7503e1c0709"
                     alt=""/>
            </div>
        )
    }
    return (
        <div className={'bg-white h-screen w-screen flex'}>
            <aside className={'w-[35%]  border-r border-r-2'}>
                <h4 className={'text-2xl font-semibold'}>Messages</h4>
                <div className={'mt-5 h-[90vh] overflow-y-auto px-2'}>
                    {
                        users.map(u => (
                            <div key={u} className={'flex gap-3 rounded-lg bg-gray-100 p-2'}>
                                <img className={'w-[50px] h-[50px] rounded-full object-cover'}
                                     src="https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg?w=996&t=st=1691661512~exp=1691662112~hmac=35a073d932ac08d6fe71dd65c760181e753637d66c98b475fc27d7503e1c0709"
                                     alt=""/>
                                <div>
                                    <h5>My Queen</h5>
                                    <p className={'text-sm'}>Bye! . <span>3m</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </aside>
            <div className={'w-full flex flex-col'}>
                <div className={'w-full'}>
                    <div className={'flex gap-3 rounded-lg border-b p-2 w-full'}>
                        <img className={'w-[35px] h-[35px] rounded-full object-cover'}
                             src="https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg?w=996&t=st=1691661512~exp=1691662112~hmac=35a073d932ac08d6fe71dd65c760181e753637d66c98b475fc27d7503e1c0709"
                             alt=""/>
                        <div>
                            <h5 className={'text-sm font-semibold'}>My Queen</h5>
                            <p className={'text-[10px] text-gray-600'}>Active 4m ago</p>
                        </div>
                    </div>
                    <div className={'p-3 flex flex-col gap-2'}>
                        {
                            messages.map((m, index) => {
                                if(m.sender === 2){
                                    return MyMessage(m);
                                }else{
                                    console.log(messages[index])

                                    return OtherMessage(m, index);
                                }
                            })
                        }
                    </div>
                </div>
                <div className={'mt-auto mb-2 mx-5'}>
                    <input placeholder={'Aa'} type="text"
                           className={'outline-none bg-gray-200 w-full h-[33px] rounded-full px-3'}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;