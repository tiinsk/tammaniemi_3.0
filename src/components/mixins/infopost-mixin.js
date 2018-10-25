import {InfopostCategory} from '../../types/infopost';

export default {
  computed: {
    $orderedCategories() {
      return [
        InfopostCategory.COMMON,
        InfopostCategory.SPRING_AUTUMN,
        InfopostCategory.CONTACTS,
        InfopostCategory.ELECTRICITY,
        InfopostCategory.LAKE_BOAT,
        InfopostCategory.SAUNA,
        InfopostCategory.TOOLS,
        InfopostCategory.WATER,
        InfopostCategory.TRASH,
        InfopostCategory.YARD_LOGS
      ];
    },
    $categoryIcons() {
      return {
        [InfopostCategory.SPRING_AUTUMN]: 'leaf',
        [InfopostCategory.CONTACTS]: 'phone',
        [InfopostCategory.ELECTRICITY]: 'lightning',
        [InfopostCategory.LAKE_BOAT]: 'anchor',
        [InfopostCategory.SAUNA]: 'fire',
        [InfopostCategory.TOOLS]: 'wrench',
        [InfopostCategory.WATER]: 'drop',
        [InfopostCategory.TRASH]: 'trash',
        [InfopostCategory.YARD_LOGS]: 'tree',
        [InfopostCategory.COMMON]: 'file'
      }
    },
    $categoryNames() {
      return {
        [InfopostCategory.SPRING_AUTUMN]: 'Kevät ja syystyöt',
        [InfopostCategory.CONTACTS]: 'Yhteystiedot',
        [InfopostCategory.ELECTRICITY]: 'Sähkö',
        [InfopostCategory.LAKE_BOAT]: 'Vene ja vesistö',
        [InfopostCategory.SAUNA]: 'Sauna',
        [InfopostCategory.TOOLS]: 'Työkalut',
        [InfopostCategory.WATER]: 'Juomavesi ja kaivo',
        [InfopostCategory.TRASH]: 'Roskat',
        [InfopostCategory.YARD_LOGS]: 'Piha ja polttopuut',
        [InfopostCategory.COMMON]: 'Yleistä'
      }
    }
  },
  methods: {
  }
};
