
const profileForm = document.getElementById('profileForm');
const avatarInput = document.getElementById('avatar');
const avatarPreview = document.getElementById('avatar-preview');
const fullnameInput = document.getElementById('fullname');
const birthdateInput = document.getElementById('birthdate');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
// Card elements
const cardAvatar = document.getElementById('card-avatar');
const cardName = document.getElementById('card-name');
const cardBirthdate = document.getElementById('card-birthdate');
const cardGender = document.getElementById('card-gender');
const cardAddress = document.getElementById('card-address');
const cardPhone = document.getElementById('card-phone');
const cardEmail = document.getElementById('card-email');
// Giá trị mặc định
const defaultValues = {
    name: 'Nguyễn Văn A',
    birthdate: '01/01/1990',
    gender: 'Nam',
    address: '123 Đường ABC, Quận XYZ, Thành phố HCM',
    phone: '0912345678',
    email: 'example@email.com'
};
// Thiết lập giá trị mặc định cho form
fullnameInput.value = defaultValues.name;
addressInput.value = defaultValues.address;
phoneInput.value = defaultValues.phone;
emailInput.value = defaultValues.email;

// Định dạng ngày tháng cho input date
const today = new Date();
const defaultDate = new Date(1990, 0, 1); // 01/01/1990
birthdateInput.value = formatDateForInput(defaultDate);
// Xử lý sự kiện khi chọn file ảnh
avatarInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
// Xử lý sự kiện submit form
profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Cập nhật thông tin lên profile card
    updateProfileCard();
});
// Hàm cập nhật thông tin lên profile card
function updateProfileCard() {
    // Cập nhật avatar
    cardAvatar.src = avatarPreview.src;
    
    // Cập nhật tên
    cardName.textContent = fullnameInput.value || defaultValues.name;
    
    // Cập nhật ngày sinh
    const birthdate = birthdateInput.value 
        ? formatDateForDisplay(new Date(birthdateInput.value)) 
        ? formatDateForDisplay(new Date(birthdateInput.value)) 
        : defaultValues.birthdate;
    cardBirthdate.textContent = birthdate;
    
    // Cập nhật giới tính
    let selectedGender = defaultValues.gender;
    for (const radio of genderInputs) {
        if (radio.checked) {
            selectedGender = radio.value;
            break;
        }
    }
    cardGender.textContent = selectedGender;
    
    // Cập nhật địa chỉ
    cardAddress.textContent = addressInput.value || defaultValues.address;
    
    // Cập nhật số điện thoại
    cardPhone.textContent = phoneInput.value || defaultValues.phone;
    
    // Cập nhật email
    cardEmail.textContent = emailInput.value || defaultValues.email;
}
// Hàm định dạng ngày tháng để hiển thị (DD/MM/YYYY)
function formatDateForDisplay(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
// Hàm định dạng ngày tháng cho input type date (YYYY-MM-DD)
function formatDateForInput(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
// Khởi tạo profile card với giá trị mặc định
updateProfileCard();

