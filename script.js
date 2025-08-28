const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const analyzeBtn = document.getElementById('analyze-btn');
const resultText = document.getElementById('result-text');

// Xử lý sự kiện khi click vào vùng tải lên
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

// Xử lý sự kiện khi file được chọn
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        showImage(file);
    }
});

// Xử lý sự kiện kéo và thả
uploadArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadArea.style.backgroundColor = '#dce6ec';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.backgroundColor = '';
});

uploadArea.addEventListener('drop', (event) => {
    event.preventDefault();
    uploadArea.style.backgroundColor = '';
    const file = event.dataTransfer.files[0];
    if (file) {
        fileInput.files = event.dataTransfer.files;
        showImage(file);
    }
});

function showImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
        imagePreview.style.display = 'block';
        analyzeBtn.disabled = false;
        resultText.textContent = 'Nhấn "Phân tích" để xem kết quả...';
    };
    reader.readAsDataURL(file);
}

// Xử lý sự kiện khi nhấn nút phân tích
analyzeBtn.addEventListener('click', () => {
    resultText.textContent = 'Đang phân tích...';
    // Tại đây, bạn sẽ thêm mã để gửi ảnh đến mô hình AI
    // Để tích hợp với AI, bạn cần một API
    // Ví dụ: gửi file bằng Fetch API
    // fetch('Đường dẫn API của bạn', {
    //     method: 'POST',
    //     body: new FormData(document.getElementById('file-form'))
    // }).then(response => response.json())
    //   .then(data => {
    //       resultText.textContent = `Kết quả: ${data.classification}`;
    //   })
    //   .catch(error => {
    //       console.error('Lỗi:', error);
    //       resultText.textContent = 'Có lỗi xảy ra khi phân tích.';
    //   });

    // Hiện tại, chúng ta sẽ giả lập kết quả
    setTimeout(() => {
        const randomResult = Math.random() > 0.5 ? 'Rác hữu cơ' : 'Rác vô cơ';
        resultText.textContent = `Kết quả: ${randomResult}`;
    }, 2000);
});