import SideBarItem from "./SideBarItem";

export default function SideBar(props: any) {
  return (
    <div className="Amotion-sidebar">
      <h4 style={{
        opacity: .7,
        fontWeight: 400
      }}>{props.title}</h4>
      <div className="Amotion-sidebar-items">
        <ul>
          <SideBarItem
            title={"Root"}
          />
          <SideBarItem
            title={"Background"}
          >
            <SideBarItem
              title={"Background#1"}
            />
            <SideBarItem
              title={"Background"}
            >
              <SideBarItem
                title={"Background#1"}
              />
              <SideBarItem
                title={"Background"}
              >
                <SideBarItem
                  title={"Background#1"}
                />
                <SideBarItem
                  title={"Background"}
                >
                  <SideBarItem
                    title={"Background#1"}
                  />
                </SideBarItem>
              </SideBarItem>
            </SideBarItem>
          </SideBarItem>
        </ul>
      </div>
    </div>
  )
}
