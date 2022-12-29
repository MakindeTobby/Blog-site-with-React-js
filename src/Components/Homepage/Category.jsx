import { useState } from "react";
import './Homepage.css'
const Category = ({ handleCategory }) => {
    const [category, setCategory] = useState([{ icon: "♟", text: "Politics" }, { icon: "🎲", text: "Games" }, { icon: "💱", text: "Crypto" },
    { icon: "💻", text: "Tech" },
    { icon: "⛪", text: "Religion" }, { icon: "💰", text: "Finances" },
    { icon: "📚", text: "Education" },
    { icon: "🏀", text: "Sport" },
    { icon: "📱", text: "Blogging" },
    { icon: "🤡", text: "Fictions" }, { icon: "⚙", text: "Engineering" },])


    return (
        <div className="d-flex flex-column p4">
            <div className="w-100 shadow-sm p-1 px-2 bg-dark mb-2 rounded-1"> <strong className="fs-5 text-white">Category</strong></div>

            <div className="d-flex change gap-2 p-2 w-100">
                {category.map((data, index) =>
                    <span className="bg-light border border-2  px-1 py-1 btn-sm category  rounded-2 overflow-hidden text-truncate" key={index} onClick={() => handleCategory(data.text)}>
                        {data.icon} {data.text}
                    </span>
                )
                }
            </div>
        </div>
    );
}

export default Category;


