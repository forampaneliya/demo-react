import "./Sidebar.css"
function Sidebar() {

    let data = [
        {
            heading: "Dashboard"
        },
        {
            heading: "Alerts"
        }, {
            heading: "Badge"
        }, {
            heading: "Buttons"
        }, {
            heading: "Cards"
        }, {
            heading: "Layout"
        }, {
            heading: "Pagination"
        }, {
            heading: "Popover"
        }, {
            heading: "Tooltips"
        }, {
            heading: "Carosel"
        }, {
            heading: "Accordian"
        }, {
            heading: "Dropdown"
        }, {
            heading: "Models"
        }, {
            heading: "Offcanvas"
        }, {
            heading: "Navbar"
        }, {
            heading: "Listgroups"
        }, {
            heading: "Alerts"
        },
    ]
    return (
        <>
            <div className="sidebar-main">
                <div className="sidebar-menu">
                    <ul className="unorder">
                        {
                            data.map((val, index) => {
                                return (
                                    <>
                                        <li className="list" style={{listStyle:"none",marginBottom:"30px",marginTop:"30px"}}>
                                            <a href="" className="menu" style={{fontSize:"24px"}}>{val.heading}</a>
                                        </li>

                                    </>
                                )

                            })
                        }


                    </ul>
                </div>

            </div>

        </>
    )
}
export default Sidebar;
