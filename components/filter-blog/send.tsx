import { useState } from 'react';

const RegisterForm = () => {
    const [keyword, setKeyword] = useState<string | undefined>();

    const handleRemoveText = () => {
        setKeyword('');
    };

    return (
        <form>
            <div className="blog-form">
                <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    type="text"
                    placeholder="Đăng ký nhận tin..."
                />
                {keyword && (
                    <span
                        onClick={handleRemoveText}
                        className="blog-form__remove-text"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                )}
                <button className="btn btn__primary blog-form__btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export { RegisterForm };
