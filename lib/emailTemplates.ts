export function approvalEmail(name: string) {
  return `
<!DOCTYPE html>
<html>
<body style="background:#090909;font-family:Arial;padding:40px;color:white">

<div style="max-width:600px;margin:auto;background:#151515;border-radius:20px;padding:40px">

<h1 style="color:#a855f7;margin-bottom:8px">
EUPHORIA '26
</h1>

<h2>Registration Approved 🎉</h2>

<p>
Hello <strong>${name}</strong>,
</p>

<p>
Your payment has been verified successfully.
</p>

<p>
We're excited to welcome you to
<strong>EUPHORIA '26'.</strong>
</p>

<hr style="border:none;border-top:1px solid #333;margin:30px 0"/>

<h3>Event Details</h3>

<p><strong>Venue</strong><br/>
Mad Over Grills - Restaurant & Banquet Hall</p>

<p><strong>Date</strong><br/>
29 August 2026</p>

<p><strong>Time</strong><br/>
7:00 PM</p>

<hr style="border:none;border-top:1px solid #333;margin:30px 0"/>

<p>
Please carry your College ID and collect your
entry wristband at the registration desk.
</p>

<p style="margin-top:40px;color:#aaa">
Regards,<br/>
Team EUPHORIA
</p>

</div>

</body>
</html>
`;
}

export function rejectionEmail(name: string) {
  return `
<!DOCTYPE html>
<html>
<body style="background:#090909;font-family:Arial;padding:40px;color:white">

<div style="max-width:600px;margin:auto;background:#151515;border-radius:20px;padding:40px">

<h1 style="color:#ef4444">
EUPHORIA '26'
</h1>

<h2>Payment Verification Failed</h2>

<p>
Hello <strong>${name}</strong>,
</p>

<p>
Unfortunately we couldn't verify your payment.
</p>

<p>
If you believe this is a mistake,
please contact the organising committee.
</p>

<p style="margin-top:40px;color:#aaa">
Team EUPHORIA
</p>

</div>

</body>
</html>
`;
}