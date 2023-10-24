/*

Trong lập trình, "stack" (ngăn xếp) là một cấu trúc dữ liệu tuyến tính (linear data structure) giúp lưu trữ và quản lý các phần tử theo cơ chế "last in, first out" (LIFO). 
Điều này có nghĩa rằng phần tử được thêm vào stack cuối cùng sẽ được loại bỏ đầu tiên.

Stack thường được sử dụng để giải quyết các vấn đề liên quan đến việc theo dõi thứ tự thực hiện (execution order), 
gọi hàm (function calls), và quản lý vùng nhớ tạm thời (temporary memory storage). Ví dụ cụ thể về việc sử dụng stack bao gồm:

Dừng và khôi phục trình tự thực hiện (Undo/Redo): Stack thường được sử dụng để lưu trữ các trạng thái hoặc hành động trước đó, cho phép người dùng hoàn tác (undo) hoặc thực hiện lại (redo) các thao tác trên ứng dụng.

Quản lý vùng nhớ tạm thời: Stack được sử dụng để quản lý dữ liệu tạm thời như biến cục bộ trong ngôn ngữ lập trình, và giúp tạo và xóa các phạm vi biến cục bộ khi hàm được gọi và kết thúc.

Gọi hàm và trả giá trị (Function Call and Return): Stack lưu trữ thông tin về hàm và trạng thái hiện tại khi một hàm được gọi. Khi hàm hoàn tất, thông tin này được loại bỏ và trình tự trở lại hàm gọi.

Stack có hai hoạt động chính:

Push: Đặt một phần tử lên đỉnh của stack.
Pop: Loại bỏ phần tử ở đỉnh của stack.

*/
