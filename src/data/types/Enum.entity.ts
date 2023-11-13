export enum OrderStatus {
  PENDING = 'Đang chờ thanh toán',
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
