import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "buy@white-butterfly-enterprises.com",
      subject: `New Enquiry for ${body.productName}`,
      html: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
      }

      .content {
        padding: 20px !important;
      }

      .label {
        width: 100% !important;
        display: block !important;
        padding-bottom: 4px !important;
      }

      .value {
        width: 100% !important;
        display: block !important;
      }

      h1 {
        font-size: 24px !important;
      }
    }
  </style>
</head>

<body
  style="
    margin:0;
    padding:0;
    background-color:#f4f4f4;
    font-family:Arial, sans-serif;
  "
>

  <table
    width="100%"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="padding:20px 10px;"
  >
    <tr>
      <td align="center">

        <table
          class="container"
          width="600"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            width:100%;
            max-width:600px;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
          "
        >

          <!-- Header -->
          <tr>
            <td
              align="center"
              style="
                background:#0f172a;
                padding:30px 20px;
                color:#ffffff;
              "
            >
              <h1
                style="
                  margin:0;
                  font-size:28px;
                  font-weight:bold;
                "
              >
                White Butterfly Enterprises
              </h1>

              <p
                style="
                  margin:10px 0 0;
                  color:#cbd5e1;
                  font-size:14px;
                "
              >
                New Export Enquiry Received
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td
              class="content"
              style="padding:30px 25px;"
            >

              <h2
                style="
                  margin-top:0;
                  margin-bottom:25px;
                  color:#111827;
                  font-size:22px;
                "
              >
                Customer Details
              </h2>

              <table
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                      color:#111827;
                    "
                  >
                    Full Name
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      color:#374151;
                    "
                  >
                    ${body.fullName}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Company Name
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${body.companyName}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Email Address
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    <a
                      href="mailto:${body.email}"
                      style="
                        color:#2563eb;
                        text-decoration:none;
                      "
                    >
                      ${body.email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Phone Number
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${body.phone}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Country
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${body.country}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Product Name
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${body.productName}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                      font-weight:bold;
                    "
                  >
                    Required Quantity
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      border-bottom:1px solid #e5e7eb;
                    "
                  >
                    ${body.quantity}
                  </td>
                </tr>

                <tr>
                  <td
                    class="label"
                    style="
                      width:35%;
                      padding:14px 0;
                      font-weight:bold;
                      vertical-align:top;
                    "
                  >
                    Message
                  </td>

                  <td
                    class="value"
                    style="
                      padding:14px 0;
                      color:#374151;
                      line-height:1.6;
                    "
                  >
                    ${body.message}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                background:#f9fafb;
                padding:20px;
                color:#6b7280;
                font-size:13px;
              "
            >
              © ${new Date().getFullYear()} White Butterfly Enterprises
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 },
    );
  }
}
