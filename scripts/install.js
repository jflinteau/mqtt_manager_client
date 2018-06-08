import seeder from "../src/default/seeder/seedParameters";

try {
    seeder.seedParameters();
}catch (e) {
    console.error(e);
}
finally {
    process.exit();
}