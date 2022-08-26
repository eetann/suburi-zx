import 'zx/globals'

const my$ = $.bind(null);
my$.verbose = false
await my$`ls`
await my$`tree -a -I '.git|node_modules|dist' --charset unicode`
