export enum DataWellcome {
  MORNING = 'Hãy bắt đầu ngày mới với những món ăn ngon nhất',
  AFTERNOON = 'Buổi chiều hãy bắt đầu với những món ăn ngon nhất',
  EVENING = 'Nếu bạn đang đói và khát hãy đến với chúng tôi',
  WELLCOME = 'Chào mừng bạn đến với ứng dụng của chúng tôi',
  NIGHT = 'Tối nay bạn ăn gì?',
  NOLOGIN = 'Đăng nhập để nhận được nhiều ưu đãi hơn',
}

export enum OrderStatus {
  PENDING = 'Chưa thanh toán',
  CONFIRMED = 'Đã thanh toán',
  PROCESSING = 'Đang xử lý',
  DELIVERING = 'Đang giao hàng',
  DELIVERED = 'Đã giao hàng',
  CANCELLED = 'Đã hủy',
  REFUNDED = 'Đã hoàn tiền',
  FAILED = 'Thanh toán thất bại',
}

export enum cartStatus {
  PENDING = 'Đã thêm vào giỏ hàng',
  CONFIRMED = 'Đơn hàng đã chuyển sang trạng thái đợi thanh toán',
}


export enum PaymentStatus {
  PENDING = 'Chưa thanh toán',
  CONFIRMED = 'Đã thanh toán',
}


export enum Reason {
  UNPAID = 'Thanh toán chưa thành công',
  CHANGE_ADDRESS = 'Thay đổi địa chỉ nhận hàng',
  CHANGE_ITEM = 'Thay đổi món',
  NO_NEED = 'Không còn nhu cầu',
  FORGET_PROMO = 'Quên nhập mã ưu đãi',
}