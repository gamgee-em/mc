import seedUserTable from './user-seeds';

const seedTables = async () => {
    await seedUserTable();
    console.log('User TABLE seeded!');
    process.exit(0);
};

seedTables();