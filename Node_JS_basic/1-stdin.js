process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input === 'exit\n') {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  } else {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});
