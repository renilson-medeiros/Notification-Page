// Remove todas de uma vez
function removeAllNotification(element) {
    element.classList.remove('new_notification');

    updateCount()
}

function markAllAsRead() {
    var allNotifications = document.querySelectorAll(".notification");
    
    allNotifications.forEach(function (allNotification) {
        allNotification.classList.remove("new_notification");
    });
    
    updateCount()
}

// Remove a notificação clicada
function removeNotification (event) {
    var clicknotifications = event.currentTarget
    clicknotifications.classList.remove("new_notification")
    
    updateCount()
}

var notifications = document.querySelectorAll(".notification")

notifications.forEach(function (notification) {
    notification.addEventListener('click', removeNotification)
    
    updateCount()
})

// Atualizar a quantidade de notificações
function updateCount() {
    var countElements = document.querySelectorAll('.count, .count_notification')
    var count = document.querySelectorAll('.new_notification').length;
  
    countElements.forEach(function (countElement) {
        countElement.textContent = count
    });
}