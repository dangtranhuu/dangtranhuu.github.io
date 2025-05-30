// tutorial.config.ts
export interface TutorialConfigItem {
  text: string
  link?: string           // Nếu là trang cụ thể
  icon?: string
  children?: TutorialConfigItem[]
  collapsible?: boolean   // true = có thể đóng/mở, false = luôn mở nếu có children
}

export const tutorialSidebar: TutorialConfigItem[] = [
  {
    text: "Technical",
    collapsible: false, // dropdown
    children: [
      {
        text: "Java Core",
        icon: "FaJava",
        collapsible: true, // dropdown tiếp
        children: [
          { text: "Tìm hiểu về Java", link: "/tutorial/programing/java-core/introduction" },
          { text: "Biến, toán tử và các kiểu dữ liệu", link: "/tutorial/programing/java-core/vars-ops-types" },
          { text: "Cấu trúc rẽ nhánh", link: "/tutorial/programing/java-core/conditionals" },
          { text: "Vòng lặp", link: "/tutorial/programing/java-core/loops" },
          { text: "Mảng", link: "/tutorial/programing/java-core/array" },
          { text: "Chuỗi", link: "/tutorial/programing/java-core/string" },
          { text: "Phương thức", link: "/tutorial/programing/java-core/method" },
        ]
      },
      {
        text: "Java OOP",
        icon: "RiJavaLine",
        collapsible: true, // dropdown tiếp
        children: [
          { text: "Tổng quan", link: "/tutorial/programing/java-oop/introduction" },
          { text: "Lập trình Hướng đối tượng", link: "/tutorial/programing/java-oop/oop" },
          { text: "Tính đa hình", link: "/tutorial/programing/java-oop/poly-morphism" },
          { text: "Tính kế thừa", link: "/tutorial/programing/java-oop/inheritance" },
          { text: "Tính đóng gói", link: "/tutorial/programing/java-oop/encapsulation" },
          { text: "Tính trừu tượng", link: "/tutorial/programing/java-oop/abstract" },
          { text: "Những câu hỏi phỏng vấn", link: "/tutorial/programing/java-oop/interview" },
        ]
      },
    ]
  },
  {
    text: "Back end",
    collapsible: false,
    children: [
      {
        text: "NodeJS",
        icon: "TbBrandNodejs",
        link: "/tutorial/back-end/nodejs",
        children: [
          { text: "Tìm hiểu về NodeJS", link: "/tutorial/back-end/nodejs/introduction-to-nodejs" },
          { text: "Tìm hiểu về Ejs", link: "/tutorial/back-end/nodejs/introduction-to-ejs" },
          { text: "Làm việc với MySQL", link: "/tutorial/back-end/nodejs/working-with-mysql" },
          { text: "Lập trình MVC", link: "/tutorial/back-end/nodejs/mvc-pattern" },
          { text: "Giới thiệu Restful API", link: "/tutorial/back-end/nodejs/introduction-to-restful-api" },
          { text: "Xây dựng Restful API", link: "/tutorial/back-end/nodejs/building-restful-api" },
          { text: "Xác thực và xác nhận người dùng", link: "/tutorial/back-end/nodejs/authentication-and-authorization" },
          { text: "Làm việc với MongoDB", link: "/tutorial/back-end/nodejs/working-with-mongodb" }
        ]
      }
    ]
  },
  {
    text: "Database",
    collapsible: false,
    children: [
      {
        text: "SQL Server",
        icon: "DiMsqlServer",
        link: "/tutorial/database/sql-server",
        children: [
          { text: "Giới thiệu SQL Server", link: "/tutorial/database/sql-server/introduction" },
          { text: "Tạo CSDL & T-SQL", link: "/tutorial/database/sql-server/db-and-tsql" },
          { text: "Hàm hệ thống & xử lý chuỗi", link: "/tutorial/database/sql-server/functions-and-strings" },
          { text: "Điều kiện & vòng lặp", link: "/tutorial/database/sql-server/conditions-and-loops" },
          { text: "Stored Procedures", link: "/tutorial/database/sql-server/stored-procedures" },
          { text: "Trigger", link: "/tutorial/database/sql-server/trigger" },
          { text: "Hàm người dùng & View", link: "/tutorial/database/sql-server/user-functions-and-views" },
          { text: "Sao lưu & phục hồi CSDL", link: "/tutorial/database/sql-server/database-backup-and-recovery" }
        ]
      }
    ]
  },
  {
    text: "Tool",
    collapsible: false, // dropdown
    children: [
      {
        text: "Git",
        icon: "FaGitAlt",
        collapsible: true, // dropdown tiếp
        children: [
          { text: "Setup môi trường", link: "/tutorial/tools/git/setup" },
          { text: "Đẩy code lên GitHub", link: "/tutorial/tools/git/push-code" },
          { text: "Undo khi gặp một commit sai", link: "/tutorial/tools/git/undo-commit" },
          { text: "Làm việc nhóm", link: "/tutorial/tools/git/collaborators" },
          { text: "Làm việc với nhánh", link: "/tutorial/tools/git/branch" },
          { text: "Viết commit message", link: "/tutorial/tools/git/commit-message" },
          { text: "Github Desktop", link: "/tutorial/tools/git/github-desktop" },
          { text: "Đóng góp mã nguồn", link: "/tutorial/tools/git/contribution" },
        ]
      },
    ]
  },
  {
    text: "Interview",
    collapsible: false, // dropdown
    children: [
      {
        text: "Java",
        icon: "FaJava",
        link: "/tutorial/interview/java"
      },
      {
        text: "Redis",
        icon: "DiRedis",
        link: "/tutorial/interview/redis"
      },
    ]
  }
]
