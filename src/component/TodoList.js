export default function TodoList() {
  const name = "海蒂·拉玛";
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
  }

  return (
    <>
      <h1>
        {name}的{formatDate(today)}待办事项
      </h1>
      <img src="/img/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>发明一种新式交通信号灯</li>
        <li>排练一个电影场景</li>
        <li>改进频谱技术</li>
      </ul>
    </>
  );
}
