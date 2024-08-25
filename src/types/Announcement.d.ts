

/**
 * 首页获取最新公告
 */
export interface IAnnouncement {
    /**
     * 返回码
     */
    code: number
    /**
     * 返回数据
     */
    data: Object
    /**
     * 返回消息
     */
    msg: string
    [property: string]: any;
    
}
