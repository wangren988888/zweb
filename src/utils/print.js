/**
 * Created by wangren on 2017/12/13.
 */
/**
 * 打印--console--level
 */
global.log = console.log.bind(console) || function() {};
global.warn = console.warn.bind(console) || function() {};
global.error = console.error.bind(console) || function() {};
global.info = console.info.bind(console) || function() {};
