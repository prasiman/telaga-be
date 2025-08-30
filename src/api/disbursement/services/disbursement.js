'use strict';

/**
 * disbursement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disbursement.disbursement');
