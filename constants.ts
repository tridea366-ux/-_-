
import { type Category } from './types';

export const NAMES: string[] = ['江口', '岡本', '菅', '豊田', '翔'];

export const CHECKLIST_CATEGORIES: Category[] = [
  {
    id: 'floor',
    title: 'フロア',
    items: ['トイレ２', 'ホワイトボード前', '手洗い', '玄関', '医療カード３', 'カーテン２', '出入り口']
  },
  {
    id: 'staff',
    title: '職員棟',
    items: ['トイレ', '手洗い', '玄関', '台所']
  },
  {
    id: 'storage',
    title: '備品庫',
    items: ['手袋１０', 'ペーパータオル１０', 'おしり拭き３', 'ティッシュペーパー３', 'トイレクイックル３', 'トイレットペーパー６']
  }
];
