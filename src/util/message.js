import { ElMessage } from 'element-plus'

export const showMessage = ({ message = '', type = 'info', duration = 1500, showClose = true }) => {
    ElMessage({
        message,
        type,
        duration,
        showClose,
    })
}

export const showSuccess = message => showMessage({ message: message, type: 'success' })
export const showError = message => showMessage({ message: message, type: 'error' })
export const showWarning = message => showMessage({ message: message, type: 'warning' })
export const showInfo = message => showMessage({ message: message, type: 'info' })
