import { useCallback } from 'react';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const useNotification = () => {
    const [api, contextHolder] = notification.useNotification();

    const notify = useCallback((notify: { type: NotificationType, message: string, description?: string }) => {
        const { type, message, description } = notify
        api.open({
            type, message, description
        });
    }, [api]);
    return { notify, contextHolder };
};

export default useNotification;