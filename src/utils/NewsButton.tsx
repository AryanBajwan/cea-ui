import "./newsbtn.css"

interface NewsButtonProps {
    word: string;
}

function NewsButton({word}: NewsButtonProps) {
    return (
        <div className="news-btn">
            <button type="button">
                {word}
            </button>
        </div>
    );
}

export default NewsButton;