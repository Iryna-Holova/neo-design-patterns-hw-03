import { PaymentProviderFactory } from '../core/PaymentProviderFactory';
import { PaymentProvider } from '../core/PaymentProvider';

export class PaymentContext {
  constructor(private readonly factory: PaymentProviderFactory) {}

  processPayment(amount: number): void {
    const provider: PaymentProvider = this.factory.createPaymentProvider();
    provider.authorize(amount);

    const transactionId = this.generateTransactionId();
    provider.capture(transactionId);
    provider.refund(transactionId);
  }

  private generateTransactionId(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
